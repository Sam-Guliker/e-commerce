export default function Bag({cart}) {
    return (
        <div className="bag-container">
            <span>{cart.length}</span><p className="bag-text">In bag</p>
        </div>
    )
}
