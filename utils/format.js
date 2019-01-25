import moment from 'moment'

/**
 * 時間フォーマット
 * @param String 日時(yyyy/mm/dd hh:ss:mm)
 */
export const formatTimeline = at => {
  let fromDate = moment(at)
  let toDate = moment()
  let diff = toDate.diff(fromDate, 'seconds')

  const result = {
    day: Math.floor(diff / 86400),
    hour: Math.floor(((diff / 86400) % 1) * 24),
    minute: Math.floor(((diff / 3600) % 1) * 60),
    second: Math.round(((diff / 60) % 1) * 60)
  }

  if (result.day >= 4) {
    return fromDate.format('MM月DD日')
  }
  if (result.day >= 1) {
    return result.day + '日前'
  }
  if (result.hour >= 1) {
    return result.hour + '時間前'
  }
  if (result.minute >= 1) {
    return result.minute + '分前'
  }
  if (result.second >= 1) {
    return result.second + '秒前'
  }
}

/**
 * ソート順定義
 * @param String key
 * @param boolean isAsc true：昇順／false：降順
 */
export const compareValues = (key, isAsc) => {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return !isAsc ? comparison * -1 : comparison
  }
}

/**
 * ソート順定義
 * @param ObList データ
 * @param String key
 * @param boolean isAsc
 * @param Array 並び替えた後のArray
 */
export const orderby = (ObList, key, isAsc) => {
  let list = []
  for (let index in ObList) {
    list.push(ObList[index])
  }
  list.sort(compareValues(key, isAsc))
  return list
}
