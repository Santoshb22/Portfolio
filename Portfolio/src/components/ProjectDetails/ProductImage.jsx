const ProductImage = ({data}) => {
    console.log(data);
    if(!data) return;
  return (
    <div className="my-4 font-medium">
        <div>
            <img className="h-[25vw] w-full rounded-md  object-fill" src={data.img} alt="product Image" />
        </div>
        <p>{data.title}</p>
    </div>
  )
}

export default ProductImage