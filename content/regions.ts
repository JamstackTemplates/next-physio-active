export type BodySide = 'front' | 'back';

export type TapeColor = 'coral' | 'teal';

/** Body region shown on the taped body map and used to group conditions on /conditions/. */
export interface BodyRegion {
  /** URL-safe unique identifier used for anchor links (#knee) and condition references. */
  id: string;
  /** Short visitor-facing name shown on the map and section headings. */
  label: string;
  /** Which anatomical figure displays this region's kinesio tape strip. */
  side: BodySide;
  /** One-line summary of the common complaints in this region. */
  blurb: string;
  /** Tape strip colour used for this region on the body map and condition heading badge. */
  tapeColor: TapeColor;
}

export const regions = [
  {
    id: 'neck',
    label: 'Neck',
    side: 'back',
    blurb: 'Stiffness, headaches and desk posture',
    tapeColor: 'teal',
  },
  {
    id: 'shoulder',
    label: 'Shoulder',
    side: 'front',
    blurb: 'Lifting, throwing and reaching overhead',
    tapeColor: 'coral',
  },
  {
    id: 'elbow-wrist',
    label: 'Elbow & wrist',
    side: 'front',
    blurb: 'Grip, typing and racquet sports',
    tapeColor: 'teal',
  },
  {
    id: 'back',
    label: 'Back',
    side: 'back',
    blurb: 'Lower back pain and sciatica',
    tapeColor: 'coral',
  },
  {
    id: 'hip',
    label: 'Hip',
    side: 'front',
    blurb: 'Groin, glutes and hip replacements',
    tapeColor: 'teal',
  },
  {
    id: 'knee',
    label: 'Knee',
    side: 'front',
    blurb: 'Running knee, ligaments and replacements',
    tapeColor: 'coral',
  },
  {
    id: 'ankle-foot',
    label: 'Ankle & foot',
    side: 'front',
    blurb: 'Sprains, Achilles and heel pain',
    tapeColor: 'teal',
  },
  {
    id: 'whole-body',
    label: 'Whole body',
    side: 'front',
    blurb: 'Recovery, conditioning and returning to sport',
    tapeColor: 'coral',
  },
] as const satisfies readonly BodyRegion[];

export type RegionId = (typeof regions)[number]['id'];

export function getRegionById(id: string): BodyRegion | undefined {
  return regions.find(region => region.id === id);
}
