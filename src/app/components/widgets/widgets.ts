import { IWidget } from 'src/app/services/firestore.service';
import { clockDefault } from './clock/clock.component';
import { memeDefault } from './meme/meme.component';
import { sbbDefault } from './sbb/sbb.component';
import { weatherDefault } from './weather/weather.component';
import { todoDefault } from './todo/todo.component';

function getX(position: number) {
  return (position - 1) % 3;
}
function getY(position: number) {
  return Math.floor((position - 1) / 3);
}

export const allWidgets: Array<IWidget> = [
  clockDefault,
  weatherDefault,
  sbbDefault,
  memeDefault,
  todoDefault
];

export const idToWidgets: Record<string, IWidget> = {};
for (const widget of allWidgets) {
  idToWidgets[widget.id] = widget;
}

export function cloneWidget(widget: IWidget) {
  return JSON.parse(JSON.stringify(widget));
}

export function applyDefaultStyle(widgets: Array<IWidget>) {
  for (const widget of widgets) {
    const defaultWidget = idToWidgets[widget.id];

    widget.style = defaultWidget.style;
    widget.classes = defaultWidget.classes;
  }
}

export function addPositionStyles(widgets: Array<any>) {
  for (const widget of widgets) {
    const x0 = getX(widget.position);
    const y0 = getY(widget.position);

    let style = ' ';
    style = `grid-column: ${x0 + 1} / span ${widget.width}; `;
    style += `grid-row: ${y0 + 1} / span ${widget.height};`;

    if (widget.style) {
      widget.style += style;  
    } else {
      widget.style = style;
    }
  }
}

export function getEmptyPositions(widgets: Array<IWidget>) {
  const occupiedPositions = [];

  for (const widget of widgets) {
    if (!widget.position) continue;

    const x0 = getX(widget.position);
    const y0 = getY(widget.position);

    for (let x = 0; x < widget.width; x++) {
      for (let y = 0; y < widget.height; y++) {
        occupiedPositions.push(3 * (y + y0) + (x + x0) + 1);
      }
    }
  }

  const emptyPositions = [];
  for (let position = 1; position <= 6; position++) {
    if (!occupiedPositions.includes(position)) {
      emptyPositions.push({
        position: position,
        width: 1,
        height: 1
      });
    }
  }

  return emptyPositions;
}
