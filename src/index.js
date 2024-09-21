import "./styles.css";

import { DomHandler } from "./modules/domhandler.js";
import { RequestHandler } from "./modules/requesthandler.js";

RequestHandler.makeRequest(DomHandler.getInputValue());
DomHandler.assignEnterClick();