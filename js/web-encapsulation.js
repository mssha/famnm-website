/**
 * Web encapsulation - functions to encapsulate external web content
 */

function openInModal (event, title)
{
	var href;
	
	if (event instanceof Event)
	{
		href = event.target.href;
		event.preventDefault();
	}
	else if (event instanceof String)
		href = event;
	
	var href = event.target.href;
	var modalParts = getLargeModal();
	var webFrame = document.createElement("iframe");
	var documentTitle;

	webFrame.style.width = "100%";
	webFrame.style.height = (document.documentElement.clientHeight * 0.65)
								+ "px";
	webFrame.src = href;
	modalParts.body.appendChild(webFrame);
	
	document.body.appendChild(modalParts.div);
	modalParts.div.style.display = "block";

	modalParts.footer.appendChild(document.createElement("button"));
	modalParts.footer.firstElementChild.className = "btn btn-primary";
	modalParts.footer.firstElementChild.type = "button";
	modalParts.footer.firstElementChild.setAttribute("data-dismiss", "modal");
	modalParts.footer.firstElementChild.textContent = "Close";
	modalParts.footer.firstElementChild.onclick = closeModal;
	
	modalParts.div.className += " in";
	modalParts.header.lastElementChild.textContent = title;
}

function getLargeModal ()
{
	var modalParts = new Object();
	
	//Get the divs that compose the modal
	modalParts.div = document.createElement("div");
	modalParts.dialog = modalParts.div.appendChild(document.createElement("div"));
	modalParts.content = modalParts.dialog.appendChild(document.createElement("div"));
	modalParts.header = modalParts.content.appendChild(document.createElement("div"));
	modalParts.body = modalParts.content.appendChild(document.createElement("div"));
	modalParts.footer = modalParts.content.appendChild(document.createElement("div"));
	
	//Set modal properties
	modalParts.div.className = "modal fade";
	modalParts.div.id = "large-modal-open";
	modalParts.div.style.backgroundColor = "rgba(0,0,0,0.5)";
	modalParts.div.tabIndex = -1;
	modalParts.div.setAttribute("role", "dialog");
	modalParts.div.setAttribute("aria-labelledby", "modal-header");
	modalParts.div.setAttribute("aria-hidden", "true");
	
	modalParts.dialog.className = "modal-dialog modal-lg";
	modalParts.content.className = "modal-content";
	modalParts.header.className = "modal-header";
	modalParts.body.className = "modal-body";
	modalParts.footer.className = "modal-footer";
	
	modalParts.header.appendChild(document.createElement("button"));
	modalParts.header.firstElementChild.type = "button";
	modalParts.header.firstElementChild.className = "close";
	modalParts.header.firstElementChild.setAttribute("data-dismiss", "modal");
	modalParts.header.firstElementChild.setAttribute("aria-label", "Close");
	modalParts.header.firstElementChild.appendChild(document.createElement("span"));
	modalParts.header.firstElementChild.firstElementChild.textContent = "\u2a09";
	modalParts.header.firstElementChild.onclick = closeModal;
	
	modalParts.header.appendChild(document.createElement("h4"));
	modalParts.header.lastElementChild.className = "modal-title";
	modalParts.header.lastElementChild.id = "modal-header";
	
	return modalParts;
}

function closeModal (event)
{
	event = event || window.event;
	
	var modalWindow = document.getElementsByClassName("modal")[0];
	
	modalWindow.parentElement.removeChild(modalWindow);
}