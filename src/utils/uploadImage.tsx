import axios from "axios";
import toast from "react-hot-toast";

export default async function uploadImage(image: Blob) {
  const imageSize = image.size / (1024 * 1024);
  if (imageSize > 2) {
    toast.error("Select image under 2MB");
    return;
  }

  const imgBody = new FormData();
  imgBody.set("key", process.env.NEXT_PUBLIC_IMGBB_API as string);
  imgBody.append("image", image);

  const res = await axios({
    method: "post",
    url: "https://api.imgbb.com/1/upload",
    data: imgBody,
  });
  return res.data.data;
}
