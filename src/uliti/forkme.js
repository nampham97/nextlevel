import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
function forkme(){
    return (
        <span id="forkme">
        <a
            href="https://github.com/nampham97/nextlevel"
            target="_blank"
            rel="noopener noreferrer"
          >
                <FontAwesomeIcon icon={faHandPointRight} /> Fork me on Github
          </a>
      </span>
    )
}

export default forkme;