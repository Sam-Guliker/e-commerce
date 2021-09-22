export default function Bag({bag, setBag}) {
    let amountInBag = bag.length
    
    return (
        <div className="bag-container">
            <span>{amountInBag}</span><p className="bag-text">In bag</p>
        </div>
    )
}
