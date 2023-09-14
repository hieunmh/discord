export interface RandomUsers {
    id: string,
    name: string,
    image: string,
}

export interface PostWithProfile {
    id: string,
    user_id: string,
    video_url: string,
    text: string,
    created_at: string,
    profile: {
        user_id: string,
        name: string,
        image: string,
    }
}

//////////////////////////////
/////////////////////////////

//  COMPONENT TYPE

export interface PostMainTypes {
    post: PostWithProfile
}

// LAYOUT TYPES
export interface MenuItemsTypes {
    iconString: string,
    colorString: string,
    sizeString: string,
}

export interface MenuItemFollowTypes {
    user: RandomUsers,

}

