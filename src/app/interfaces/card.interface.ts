

export interface Card {
    cards: Array<CardDetails>;
}

 export interface CardDetails {
    imageUrl: string;
    name: string;
    set: string;
    artist: string;
}
