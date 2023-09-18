import { CommentsTypes } from "@/app/type";
import ClientOnly from "../ClientOnly";
import SingleComment from "./SingleComment";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";

export default function Comments({params}: CommentsTypes) {

    const commentByPost = [
        {
            id: '123',
            user_id: '123',
            post_id: '789',
            text: 'this is a text',
            created_at: 'date here',
            profile: {
                user_id: '123',
                name: 'Hieu',
                image: 'https://placehold.co/100'
            }
        },
        {
            id: '124',
            user_id: '124',
            post_id: '689',
            text: 'this is a text 123',
            created_at: 'date here',
            profile: {
                user_id: '123',
                name: 'Minh',
                image: 'https://placehold.co/100'
            }
        },
    ]

    const [comment, setComment] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const addComment = () => {
        console.log('addComment');
    }

    return (
        <>
            <div id="Comments" className="relative bg-[#f8f8f8] z-0 w-full h-[calc(100%-273px)] border-t-2 overflow-auto">
                <div className="pt-2" />

                <ClientOnly>
                    {commentByPost.length < 1 ? (
                        <div className="text-center mt-6 text-xl text-gray-500">No comments...</div>
                    ) : (
                        <div>
                            {commentByPost.map((comment, index) => (
                                <SingleComment key={index} comment={comment} params={params} />
                            ))}
                        </div>
                    )}
                </ClientOnly>

                <div className="mb-28" />
            </div>

            <div id="CreateComment" className="absolute flex items-center justify-between 
                bottom-0 bg-white h-[85px] lg:max-w-[550px] w-full py-5 px-8 border-t-2"
            >
                <div className={`bg-[#f1f1f2] flex items-center rounded-lg w-full lg:max-w-[420px]
                    ${inputFocused ? 'border-2 border-gray-400' : 'border-2 border-[#f1f1f2]'}`}
                >
                    <input onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)}
                        onChange={(e) => setComment(e.target.value) } value={comment || ''}
                        className="bg-[#f1f1f2] text-[14px] focus:outline-none w-full lg:max-w-[420px] p-2 rounded-lg"
                        type="text" placeholder="Add comment..."
                    />
                </div>

                {!isUploading ? (
                    <button disabled={!comment} onClick={() => addComment()}
                        className={`font-semibold text-sm ml-5 pr-1
                        ${comment ? 'text-[#f02c56] cursor-pointer' : 'text-gray-400'}`}
                    >
                        Post
                    </button>
                ) : (
                    <BiLoaderCircle className="animate-spin" color="#e91e62" size="20" />
                )}
            </div>
        </>
    )
}