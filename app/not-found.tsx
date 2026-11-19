import { LaneNumeral, TapeSeam } from '../components/artwork/dividers';
import { WrongLaneArt } from '../components/artwork/wrong-lane-art';
import { SiteLink } from '../components/site-link';

export default function NotFound() {
  return (
    <>
      <section className="relative isolate overflow-x-clip pt-14 pb-24 sm:pt-20 sm:pb-32">
        <LaneNumeral className="top-4 right-[1vw] -z-10">404</LaneNumeral>
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="order-2 lg:order-1 lg:-ml-[4vw]">
            <WrongLaneArt />
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow">Page not found</p>
            <h1 className="display-lg mt-5 text-ink">Looks like a wrong turn</h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              This page has pulled up sore. Let&apos;s get you back on track.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <SiteLink href="/" className="button">
                Back to Home
              </SiteLink>
              <SiteLink href="/conditions/" className="button button-quiet">
                Conditions we treat
              </SiteLink>
              <SiteLink href="/contact/" className="button button-quiet">
                Contact reception
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
      <TapeSeam color="teal" angle={-3} />
    </>
  );
}
