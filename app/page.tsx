import ClientOnly from "./components/ClientOnly"
import PostMain from "./components/PostMain"
import MainLayout from "./layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
        <ClientOnly>
          <PostMain post={{
            id: '123',
            user_id: '123',
            video_url: '/vn.mp4',
            text: 'this is a text',
            created_at: 'date here',
            profile: {
              user_id: '123',
              name: 'Hieu',
              image: 'https://placehold.co/100'
            }
          }}
          />
        </ClientOnly>
      </div>
    </MainLayout>
  )
}
