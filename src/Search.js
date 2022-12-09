const{data:pictureData}=useQuery(QUERY_ALL_PICTURES);
const[fetchPicture,{data:pictureSearchedData, error:pictureError}]=useLazyQuery(GET_PICTURE_BY_NAME);
  if (pictureSearchedData){
    console.log(pictureSearchedData);
  }
  if (pictureError){
    console.log(pictureError);
  }

  return(
    <div>
        {pictureData&&
            pictureData.pictures.map((picture)=>{
                return (
                    <div>
                        <h1> id:{picture.id}</h1>
                        <h1>Name: {picture.name}</h1>  
                        <h1>URL:{picture.url}</h1>
                    </div>
                )
            })
        }
    <div>
        <input type="text" placeholder="Picture.."
            onChange={(event)=> {setPictureSearched(event.target.value);}}/>
            <button onClick={()=>
                {fetchPicture({variables:{name: pictureSearched}})}}>Fetch Data</button>
            <div>
                {pictureSearchedData && (
                <div>
                    <h1>PictureName:{pictureSearchedData.picture.name}</h1>{" "}
                    <h1>PictureUrl:{pictureSearchedData.picture.url}</h1>{" "}
                </div>)}
                {pictureError && <h1> The picture not exist</h1>}
            </div>
        </div>
    </div>
)

