'use client';
import { default as Provider1 } from "@/store/1-usecontext/challenge1/provider";
import { default as Provider2 } from "@/store/1-usecontext/challenge2/provider";
import { default as Provider3 } from "@/store/1-usecontext/challenge3/provider";
import { default as Provider4 } from "@/store/2-usereducer/challenge4/provider";
import './style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider1>
      <Provider2>
        <Provider3>
          <Provider4>
            <html lang="en">
              <body >
                <div className='middle'>
                  <div className='box'>
                    {children}
                  </div>
                </div>
              </body>
            </html>
          </Provider4>
        </Provider3>
      </Provider2>
    </Provider1>

  );
}
