export interface IResponse{
    etag:string
    items:IItem[]
    kind: string
    pageInfo:{
        resultsPerPage: number
        totalResults: number
    }
}
interface IItem{
    etag:string
    id:string
    kind:string
    snippet: ISnippet
    statistics: IStatistics
}
interface ISnippet{
    categoryId: string
    channelId: string
    channelTitle: string
    defaultAudioLanguage: string
    defaultLanguage?: string
    description: string
    liveBroadcastContent: string
    localized: ILocalized
    publishedAt: string
    tags: string[]
    thumbnails: IThumbnails
    title: string
}

interface ILocalized{
    description: string
    title: string
}

interface IThumbnails{
    default: IThumbnailsProperty
    high: IThumbnailsProperty
    maxres: IThumbnailsProperty
    medium: IThumbnailsProperty
    standard: IThumbnailsProperty
}

interface IThumbnailsProperty{
    url:string
    width: number
    height: number
}

interface IStatistics{
    commentCount: string  
    dislikeCount: string 
    favoriteCount: string 
    likeCount: string 
    viewCount: string
}