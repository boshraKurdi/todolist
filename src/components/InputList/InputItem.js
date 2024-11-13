import './InputItem.css';
export default function InputItem(props){
    const Name = props.name;
    const Age = props.age;
    const GName = props.getN;
    const GAge = props.getG;
    const add = props.add;
    return(
        <div>
            <form>
                <input value={GName} type="text" placeholder="enter your name .." onChange={(event)=>{Name(event.target.value)}} />
                <input value={GAge} type="number" placeholder="enter your ade .." onChange={(event)=>{Age(event.target.value)}}/>
                <button onClick={(event)=>{
                    event.preventDefault();
                    add()
                    }}>Add +</button>
            </form>
        </div>
    )
}