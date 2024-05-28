import { Card } from "@mui/material"
import { styled } from "@mui/styles"
import clsx from "clsx"
import { ReactNode } from "react"


interface ListSummaryBarProps {
    noMarginTop?: boolean
    noMarginBottom?: boolean
    action?: ReactNode
    stackOnMobile?: boolean
    legend?: ReactNode
    count?: number
    totalCount?: number
}

const classes = {
    root: `root`,
    noMarginTop: `noMarginTop`,
    noMarginBottom: `noMarginBottom`,
    legend: `legend`
}

const ListRoot = styled(Card)(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 30,
        // [theme.breakpoints.down('xs')]: {
        //     display: (props: any) => (props.stackOnMobile ? 'block' : 'flex'),
        // },
    },
    [`&.${classes.noMarginTop}`]: {
        marginTop: 0,
    },
    [`&.${classes.noMarginBottom}`]: {
        marginBottom: 0,
    },
    [`&.${classes.legend}`]: {
        marginTop: 15,
    },
})) as typeof Card

export default function ListSummaryBar({
    noMarginTop = false,
    noMarginBottom = false,
    action = null,
    count,
    stackOnMobile,
    totalCount,
    legend,
}: ListSummaryBarProps) {
    const rootClassNames = clsx(classes.root, {
        [classes.noMarginTop]: noMarginTop,
        [classes.noMarginBottom]: noMarginBottom,
    })

    return (
        <div className={rootClassNames}>
            {/* <div>
        {!isEmpty(count) && !isEmpty(totalCount) && (
          <>
            <SummaryResultsText
              noMarginBottom
              noMarginTop
              value={t`Showing ${count} of ${totalCount} results`}
            />

            {legend && <div className={classes.legend}>{legend}</div>}
          </>
        )}
      </div> */}

            {action && (
                <div style={{ marginTop: stackOnMobile ? '10px' : undefined }}>
                    {action}
                </div>
            )}
        </div>
    )
}