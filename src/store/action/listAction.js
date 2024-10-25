export const NowPlaying = "NowPlaying"
export const Populer = "Populer"
export const TopRated ="TopRated"
export const UpComing ="UpComing"


export const setNowPlaying =(data) => ({
    type : NowPlaying,
    payload :data,
});

export const setPopuler =(data) => ({
    type : Populer,
    payload :data,
});

export const setTopRated =(data) => ({
    type : TopRated,
    payload :data,
});

export const setUpComing =(data) => ({
    type : UpComing,
    payload :data,
});
