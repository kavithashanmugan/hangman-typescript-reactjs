 const HEAD = (
    <div style={{width:'50px',height:'50px',border:'10px solid black',borderRadius:'100%',top:'50px',position:'absolute',right:'-30px'}}/>
 )

 const BODY =(
    <div style={{width:'10px',height:'110px',background:'black',top:'110px',right:0,position:'absolute'}}/>
 )

 const RIGHT_ARM =(
    <div style={{width:'100px',height:'10px',background:'black',top:'150px',right:'-100px',position:'absolute',rotate:'-30deg',transformOrigin:'left bottom'}}/>
 )

 const LEFT_ARM =(
    <div style={{width:'100px',height:'10px',background:'black',top:'150px',right:'10px',position:'absolute',rotate:'30deg',transformOrigin:'right bottom'}}/>
 )

 const RIGHT_LEG =(
    <div style={{width:'100px',height:'10px',background:'black',top:'210px',right:'-90px',position:'absolute',rotate:'60deg',transformOrigin:'left bottom'}}/>
 )

 const LEFT_LEG =(
    <div style={{width:'100px',height:'10px',background:'black',top:'210px',right:'0px',position:'absolute',rotate:'-60deg',transformOrigin:'right bottom'}}/>
 )

 

const HangmanDrawing = () => {
    return (
            <div style={{ position:'relative' }}>
                {HEAD}
                {BODY}
                {RIGHT_ARM}
                {LEFT_ARM}
                {RIGHT_LEG}
                {LEFT_LEG}
                <div style={{height:'50px',width:'10px' ,background:'black', position:'absolute',top:0,right:0}}/>
                <div style={{height:'10px',width:'200px' ,background:'black',marginLeft:'120px'}}/>
                <div style={{height:'400px',width:'10px',background:'black',marginLeft:'120px'}}/>
            <div style={{height:'10px',width:'250px' ,background:'black'}}/>
            </div>
    )
}

export default HangmanDrawing