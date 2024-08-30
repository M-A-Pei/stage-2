import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Media() {
  const user: any = useOutletContext();

  const temp:any= []
  user.posts.map((e: any) => {
    e.images.map((f: any) => {
      temp.push(f.image)
    })
  })

  const [userImages] = useState(temp)

  console.log(userImages)
    return (
      <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
        {userImages.map((item: any) => (
          <ImageListItem key={item}>
            <img
              src={`http://localhost:3000/uploads/${item}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );

    
  }

