declare interface IModalContentData {
    title: string,
    subTitle: string,
    images: IImageData[],
    description: IDescriptionData
}

declare interface IDescriptionData {
    main: string,
    information: string[]
}
