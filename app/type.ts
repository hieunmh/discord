export interface UserContextTypes {
    user: User | null,
    register: ( name: string, email: string, password: string ) => Promise<void>,
    login: ( email: string, password: string ) => Promise<void>,
    logout: () => Promise<void>,
    checkUser: () => Promise<void>
}

export interface User {
    id: string,
    name: string,
    bio: string,
    image: string,
}

export interface RandomUsers {
    id: string,
    name: string,
    image: string,
}

export interface CropperDimensions {
    height?: number | null,
    width?: number |null,
    left?: number |null,
    right?: number |null,
}

export interface ShowErrorObject {
    type: string,
    msg: string,
}

export interface Like {
    id: string,
    user_id: string,
    post_id: string,
}

export interface Post {
    id: string,
    user_id: string,
    video_url: string,
    text: string,
    created_at: string,
}

export interface CommentWithProfile {
    id: string,
    user_id:string,
    post_id: string,
    text: string,
    created_at: string,
    profile: {
        user_id: string,
        name: string,
        image: string
    }
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

export interface UploadError {
    type: string,
    msg: string,
}

//////////////////////////////
/////////////////////////////

//  COMPONENT TYPE

export interface CommentsHeaderTypes {
    post: PostWithProfile,
    params: { 
        userID: string,
        postID: string,
    }
}

export interface CommentsTypes {
    params: {
        userID: string,
        postID: string,
    }
}

export interface SingleCommentTypes {
    params: { 
        userID: string, 
        postID: string 
    },
    comment: CommentWithProfile
}

export interface PostMainTypes {
    post: PostWithProfile
}

export interface PostLikesTypes {
    post: PostWithProfile
}

export interface PostTypes {
    params: {
        userID: string,
        postID: string,
    }
}

export interface PostUserTypes {
    post: Post,

}

export interface ProfileTypes {
    params: { id: string }
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

export interface TextInputTypes {
    string: string,
    placeholder: string,
    onUpdate: (newValue: string) => void,
    inputType: string,
    error: string,
}