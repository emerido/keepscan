import { ReactElement } from 'react'

export type FieldConfig = {
    name: string
    options: FieldOptions
}

export type FieldOptions = {
    label?: string
    render?: FieldRender,
    payload?: any
    hidden?: (subject: any) => boolean
    visible?: (subject: any) => boolean
}

export type FieldRender = (config: { value: any } & any) => ReactElement
