import IdCard from "./Components/IdCard"
import User from "./Components/Users.json"

function App() {

  return (
    <>

      <div className="grid grid-cols-4 gap-4 bg-blue-200 w-full max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[550px]:grid-cols-1 p-4">

        {User.map(function (obj, index) {
          return (
            <IdCard
              name={obj.name}
              role={obj.role}
              link1={obj["facebook-link"]}
              link2={obj["twitter-link"]}
              link3={obj["ig-link"]}
              link4={obj["youtube-link"]}
              link5={obj["subscribe-link"]}
              likeCount={obj.likeCount}
              commentCount={obj.commentCount}
              shareCount={obj.shareCount}
              imgUrl={obj.imgUrl}
            />
          )
        })}
      </div>

    </>
  )
}

export default App
