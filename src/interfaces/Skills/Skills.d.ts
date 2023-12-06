declare interface ISkillsData {
    language: {
        
    },

    frontend: {
        imageData: IImageData[],
        alt: string[]
    },

    backend: {
        imageData: IImageData[],
        alt: string[]
    },

    deploy: {
        imageData: IImageData[],
        alt: string[]
    }
}

declare interface ILogoContainerProps {
    title: string, 
    logoImageData: IImageData[], 
    altTexts: string[]
}