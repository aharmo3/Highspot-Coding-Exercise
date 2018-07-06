

export interface Card {
    cards: CardDetails[];
}

 export interface CardDetails {
    imageUrl: string;
    name: string;
    set: string;
    artist: string;
}
