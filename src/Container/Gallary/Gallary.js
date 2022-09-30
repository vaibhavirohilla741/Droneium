import PhotoAlbum from "react-photo-album";

import React from "react";

function Gallary() {
  const photos = [
    {
      src: "https://th.bing.com/th/id/R.ca6c02159e31328594f13f3debdbe41c?rik=KqIcu4myXOsBQQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1816232.jpg&ehk=HVL9PYRl5Xgi%2bRdPIRDK3ojbijbpQppTek6AmGC%2bE9Y%3d&risl=&pid=ImgRaw&r=0",
      width: 800,
      height: 600,
    },
    {
      src: "https://th.bing.com/th/id/R.18b66c3b36872b25cfebf84d9f9dc401?rik=c%2fYa6w6%2fBtJS3w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1816233.jpg&ehk=CDaqV8cnYM0FZMICxz%2fZdSnevAKZd0AO000p%2bBEvkgs%3d&risl=&pid=ImgRaw&r=0",
      width: 1600,
      height: 900,
    },
  ];
  return <PhotoAlbum layout="rows" photos={photos} />;
}

export default Gallary;
