import { useCart } from 'react-use-cart'

const Cards = ({ img, title, price, desc, item }) => {
    const { addItem } = useCart();
    return (
        <>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'>
                <div className="card h-100 shadow rounded">
                    <img src={img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title fw-bold">{title}</h5>
                            <span className="fw-bolder">R$ {price}</span>
                        </div>
                        <div className="">
                            <p className="card-text">{desc}</p>
                        </div>
                        <div className="d-grid mt-4">
                            <button className='btn btn-sm btn-outline-success' onClick={() => addItem(item)}>Adicionar no Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards