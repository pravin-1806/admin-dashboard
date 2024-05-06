import { ResponsivePie } from "@nivo/pie"
import { tokens } from "../Theme"
import { useTheme } from "@mui/material"
import { mockPieData as data } from "../Data/mockData"

const PieChart=({isDashboard=false})=> {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

  return (
    <ResponsivePie
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        strokes:colors.gray[100]
                    }
                },
                legend:{
                    text:{
                        fill:colors.gray[100]
                    }
                },
                ticks:{
                    lines:{
                        stroke:colors.gray[100],
                        strokeWidth:1,
                    },
                    text:{
                        fill:colors.gray[100]
                    },
                },
            },
            legends:{
                text:{
                    fill:colors.gray[100]
                },
            },
            tooltip:{
                container:{
                    color:colors.primary[500],
                }
            },
        }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.2'
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.gray[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: colors.gray[900]
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default PieChart
