declare interface ISkillsData {
    frontend: ISkillImageData
    backend: ISkillImageData
    deploy: ISkillImageData
}

declare interface ISkillImageData {
    title: string,
    imageData: IImageData[],
    alt: string[]
}

declare interface ILogoContainerProps {
    title: string, 
    logoImageData: IImageData[], 
    altTexts: string[]
}