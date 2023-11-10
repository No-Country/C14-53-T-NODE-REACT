// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const CalendarChart = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsiveCalendar
    data={data}
    from="2015-03-01"
    to="2015-12-31"
    emptyColor="#eeeeee"
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    margin={{ left: 40 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        itemCount: 4,
        itemWidth: 34,
        itemHeight: 25,
        itemsSpacing: 14,
        itemDirection: 'right-to-left'
      }
    ]}
  />
)
