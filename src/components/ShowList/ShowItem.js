import './ShowItem.css';
export default function ShowItem(props){
    const items = props.item;
    const DeleteItem = props.delete;
    const EditItem = props.edit;
    const lengthItems = items.length;
    const listItem = lengthItems ? items.map((item)=>{
        return (
            <div className='body' key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="event iconD" onClick={()=>{DeleteItem(item.id)}}>delete</span>
                <span className="event iconE" onClick={()=>{EditItem(item.id)}}>edit</span>
            </div>
        )
    }) : <p>NO DATA</p>
    return(
        <div className="listItems">
            <div className='header'>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="event title">Event</span>
            </div>
            {listItem}
        </div>
    )
}