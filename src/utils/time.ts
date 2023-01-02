import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

const DEFAULT_DATE_FORMAT_STR = 'YYYY-MM-DD HH:mm:ss'
dayjs.extend(utc)

export function formatUTCString(
  utcString: string,
  formatStr: string = DEFAULT_DATE_FORMAT_STR
): string {
  return dayjs.utc(utcString).utcOffset(8).format(formatStr)
}
