const  subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text}`;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;

  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split("  ").map(addWord);

createSubtitle("Download  the  spork  3D  model  <a href='Sporknife.zip' style='text-decoration: none;' download>here</a>.  The  idea  of  the  spork  3D  model  was  originated  from  a  writing  test.  By  the  way,  I  didn't  make  this  myself,  I  stole  it  from  <a href='https://www.youtube.com/watch?v=joDhIH6Xumw'>this guy</a>.");