# learn_useContext

Professional learning NextJs useContext in the easiest possible way for those who have tried any other ways.

## 1. Create Project

$ npx create-next-app@latest
source: https://nextjs.org

## 2. Setup Project

✔ What is your project named?learn_usecontext
✔ Would you like to use TypeScript? [Yes]
✔ Would you like to use ESLint? [Yes]
✔ Would you like to use Tailwind CSS? [Yes]
✔ Would you like to use `src/` directory? [Yes]
✔ Would you like to use App Router? (recommended) [Yes]
✔ Would you like to customize the default import alias (@/\*)? [No]

## 3. Insatll Dependencies

$ cd learn_useContext
$ npm i

## 4. Run Projct

npm run dev
http://localhost:3000

# References:

https://github.com/Medic1111/monstera-shop-client-only-typescript
You're importing a component that needs createContext. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default (https://nextjs.org/docs/getting-started/react-essential)
https://stackoverflow.com/questions/62420064/usecontext-values-gets-cleared-during-page-refresh-and-logout
https://stackoverflow.com/questions/62896954/how-to-instantly-update-state-when-any-changes-into-the-localstorage-in-react-js
https://stackoverflow.com/questions/52474208/react-localstorage-is-not-defined-error-showing

https://developer.school/snippets/react/localstorage-is-not-defined-nextjs
