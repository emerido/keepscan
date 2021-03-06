import React, { ComponentProps, createElement, FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useClasses, useStyles } from 'shared/hooks/styles'
import styles from './display.css'

type DisplayProps = ComponentProps<'div'> & {
    // TODO: Allow react component
    as?: string
    size?: string | number
    error?: boolean
    inline?: boolean
    secondary?: boolean
}

type DisplayLinkProps = ComponentProps<'a'> & {
    to: string
    size?: string | number
    external?: boolean
    secondary?: boolean
}

const DisplayPropsStyles = {
    size: 'fontSize',
}

export const Display: FC<DisplayProps> = ({ as = 'div', children, ...props }) => {
    const className = useClasses(styles, 'display', props)
    const styleMap = useStyles(props, DisplayPropsStyles)
    return createElement(as, { className, style: styleMap, ...props }, children)
}

export const DisplayLink: FC<DisplayLinkProps> = ({ children, external, to, ...props }) => {
    const className = useClasses(styles, 'display-link', props)
    const styleMap = useStyles(props, DisplayPropsStyles)

    const isExternal = to && (to.match('https://') || external)

    const rules = useMemo(() => {
        return {
            target: isExternal && '_blank',
            rel: isExternal && 'noreferer noopener',
        }
    }, [to])

    if (isExternal) {
        return (
            <a href={to} className={className} style={styleMap} {...rules} {...props}>
                {children}
            </a>
        )
    }

    return (
        <Link to={to} className={className} style={styleMap}>
            {children}
        </Link>
    )
}
DisplayLink.defaultProps = {
    external: false,
}
