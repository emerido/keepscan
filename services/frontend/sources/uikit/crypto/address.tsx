import React, { ComponentProps, FC, useCallback, useMemo } from 'react'
import styles from './address.css'
import { useClasses } from 'shared/hooks/styles'
import { ellipsis } from 'shared/string'
import { Display, DisplayLink } from 'uikit/typography/display'
import { useClipboard } from 'use-clipboard-copy'
import { getNetworkLink } from 'uikit/crypto/utils'
import { useMedia } from 'react-use'
import { is } from 'ramda'

type AddressProps = ComponentProps<'a'> & {
    full?: boolean
    kind?: 'address' | 'token' | 'tx'
    value: string
    color?: 'green' | 'brass' | 'violet'
    useCopy?: boolean
    /**
     * Should address generate link to indexers or use passed url
     */
    useLink?: boolean | string
    params?: Record<string, any>
    /**
     * Minimal screen wide for full address rendering
     */
    minimalWide?: number
}

export const useAddress = (address: string, short: boolean = false) => {
    return address && (short ? ellipsis(6, 4, address) : address)
}

export const Address: FC<AddressProps> = ({ value, useCopy, useLink, kind, full, params, minimalWide, ...props }) => {
    const enabledFull = useMedia(`(min-width: ${minimalWide}px)`)

    const address = useAddress(value, !(full && enabledFull))

    const clipboard = useClipboard({
        copiedTimeout: 800,
    })

    const onCopy = useCallback(
        (event) => {
            event.preventDefault()
            event.stopPropagation()
            clipboard.copy(value)
        },
        [value]
    )

    const className = useClasses(styles, 'address', { ...props, copied: clipboard.copied })

    if (null == address) {
        return null
    }

    if (useLink) {
        const to = is(String, useLink) ? (useLink as string) : getNetworkLink(value, kind, params || {})
        return (
            <DisplayLink to={to} className={className}>
                {address}
                {useCopy && <div className={styles.clipboard} onClick={onCopy} />}
            </DisplayLink>
        )
    }

    return (
        <Display className={className}>
            {address}
            {useCopy && <div className={styles.clipboard} onClick={onCopy} />}
        </Display>
    )
}

Address.defaultProps = {
    full: false,
    useLink: true,
    useCopy: true,
    kind: 'address',
    color: 'violet',
    minimalWide: 1280,
}
