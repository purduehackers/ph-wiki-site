export default interface MenuItem {
  id: string;
  slug: string;
  name: string;
  type: string;
  children: MenuItem[];
}
