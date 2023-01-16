function rotate()
{
    const buttons = document.getElementsByClassName("grid-item");
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];
    let r = 0, c = 0, di = 0, i = 0;
    let currValue = buttons[0].innerHTML;

    while(i < 9)
    {
        let currIndex = r*3 + c;
        let cr = r + dr[di];
        let cc = c + dc[di];

        if(cr >= 0 && cc >= 0 && cr < 3 && cc < 3)
        {
            let nextIndex = cr*3 + cc;
            let tempValue = buttons[nextIndex].innerHTML;
            buttons[nextIndex].innerHTML = currValue;
            currValue = tempValue;
            r = cr;
            c = cc;
            i++;
        }
        else
        {
            di = (di+1)%4;
        }
    }
};