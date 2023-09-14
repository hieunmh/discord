export interface RandomUsers {
    id: string,
    name: string,
    image: string,
}

export interface Like {
    id: string,
    user_id: string,
    post_id: string,
}

export interface Comment {
    id: string,
    user_id: string,
    post_id: string,
    text: string,
    created_at: string,
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

export interface PostLikesTypes {
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

