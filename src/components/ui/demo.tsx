import { Logos3 } from "@/components/ui/logos3"

const demoData = {
  heading: "Trusted by these Creators",
  logos: [
    {
      id: "logo-1",
      description: "Creator 1",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-2",
      description: "Creator 2",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-3",
      description: "Creator 3",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Mimi",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-4",
      description: "Creator 4",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-5",
      description: "Creator 5",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jack",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-6",
      description: "Creator 6",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=George",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-7",
      description: "Creator 7",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasmine",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-8",
      description: "Creator 8",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Luna",
      className: "h-12 w-12 rounded-full",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };
