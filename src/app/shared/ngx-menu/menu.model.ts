export class Menu {
  title: string;
  items: Map<number, MenuItem>;
  selectedIndex: number;

  constructor(title: string, items: Map<number, MenuItem>) {
    this.title = title;
    this.items = items;
  }

  get selectedItem() {
    return this.items.get(this.selectedIndex);
  }
}

export class MenuItem {
  title: string;
  icon: string;
  tooltip?: string;
  cssClass?: string;
  isEnabled: boolean = true;

  constructor(
    title: string,
    icon: string,
    tooltip: string = "",
    cssClass: string = ""
  ) {
    this.title = title;
    this.icon = icon;
    this.tooltip = tooltip;
    this.cssClass = cssClass;
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }

  enable() {
    this.isEnabled = true;
  }
}
