import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';


export const pageTemplate = (text: string, currentPage: number, storyBookLength: number) => {
    if(currentPage === 0){
        return`
        <h1 style="text-align: center;">${text}</h1>
        <div class="board__storybook__arrows"style="display: flex;
        justify-content: flex-end;">
        <div class="board__storybook__arrowLeft" style="display:none;">
            <i class="fas fa-reply"></i>
        </div>
        <div class="board__storybook__arrowRight">
            <i class="fas fa-share"></i>
        </div>
        ` ;
    }else if(currentPage === storyBookLength){
        return`
        <h2>${text}</h2>
        <div class="board__storybook__arrows">
        <div class="board__storybook__arrowLeft">
            <i class="fas fa-reply"></i>
        </div>
        <div class="board__storybook__arrowRight" style="display:none;">
            <i class="fas fa-share"></i>
        </div>
        ` ;
    }
    return`
    <h2>${text}</h2>
    <div class="board__storybook__arrows">
    <div class="board__storybook__arrowLeft">
        <i class="fas fa-reply"></i>
    </div>
    <div class="board__storybook__arrowRight">
        <i class="fas fa-share"></i>
    </div>
    ` ;
};

export const puzzleTemplate = (puzzle : Puzzle) : string => {
    return `
        <div class='interface__puzzle__container' id=${puzzle.id}>
            ${puzzle.content}
        </div>
    `;
}

export const puzzleSolveTemplate = (puzzle : Puzzle, visitedCards : Array<PuzzleCard>) : string =>{
    let str = `
    <span class="puzzle__close" id="puzzle__close">&#10006;</span>
    <div class='puzzle__text'>
        <div>Title: ${puzzle.content}</div>
        <div>Hints:`;
    
    visitedCards.forEach(el=>{
        str+=el.content
    })
    
    str+= `
        </div>
        <div>
            <input type='text' id='${puzzle.id}input'>
        </div>
        <button class='Confirm${puzzle.id}'>Confirm</button>
        </div>
        `;
    return str;
}