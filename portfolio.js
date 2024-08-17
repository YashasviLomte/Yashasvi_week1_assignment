
function changetext()
{
    const strings=["Graduate","Web Developer"]
    const typespeed=100;
    const erasespeed=50;
    const pausetime=1500;
    const element= document.querySelector('.webspan');

    let textIndex=0;
    let charIndex=0;
    let isDelete=false;

    function type()
    {
        const currText=strings[textIndex];
        if(!isDelete && charIndex<currText.length)
        {
            element.textContent+=currText[charIndex];
            charIndex++;
            setTimeout(type,typespeed);
        }
        else if(isDelete && charIndex>0)
        {
            element.textContent=currText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type,erasespeed);  
        }
        else
        {
            isDelete=!isDelete;
            if(!isDelete)
            {
                textIndex=(textIndex+1)%strings.length;
            }
            setTimeout(type,pausetime);
        }
    }
    type();
}
changetext();