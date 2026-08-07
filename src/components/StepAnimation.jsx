import { Fragment } from 'react';
import {
  IconBuildingStore,
  IconHandClick,
  IconPencil,
  IconTools,
  IconPencilCheck,
  IconBuildings,
  IconCarCrane,
  IconClipboardText,
  IconTextScanAi,
  IconMailForward,
  IconCalendarBolt,
  IconFilter2Code,
  IconBusinessplan,
  IconCheck,
  IconX,
  IconArchive,
  IconTableAlias,
  IconAdjustmentsCog
} from '@tabler/icons-react';
import './StepAnimation.css';

/* Map the plain strings used in projects.js to real icon components,
   so the data file stays free of imports. */
const ICONS = {
  clicking: IconHandClick,
  store: IconBuildingStore,
  pencil: IconPencil,
  tools: IconTools,
  pencil2: IconPencilCheck,
  building: IconBuildings,
  crane: IconCarCrane,
  clip: IconClipboardText,
  ai: IconTextScanAi,
  email: IconMailForward,
  remind: IconCalendarBolt,
  subscenario: IconFilter2Code,
  qb: IconBusinessplan,
  renew: IconCheck,
  notrenew: IconX,
  record: IconArchive,
  sheets: IconTableAlias,
  system: IconAdjustmentsCog

};

/* Every variant shares one cycle length so steps stay in sync down the page.
   The active sequence occupies the first half of the cycle; the rest is the
   rest state, which is what creates the pause between loops. */
const CYCLE = 3;
const SPAN = CYCLE * 0.5;
const WIRE_OFFSET = 0;

/* Geometry shared between the fan SVG and the CSS. If you change the node
   size or stack gap in StepAnimation.css, change it here too or the curves
   will stop meeting the circles. */
const NODE = 52;
const GAP = 12;
const FAN_W = 72;

function Node({ name, delay }) {
  const Icon = ICONS[name] || IconCircleCheck;
  return (
    <div
      className="step-anim-node"
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon size={21} stroke={1.6} />
    </div>
  );
}

function Wire({ delay }) {
  return (
    <div className="step-anim-wire">
      <span
        className="step-anim-dot"
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  );
}

/* One curve per outcome, generated from `count`. direction 'out' fans a
   single source into a stack; 'in' converges a stack back into one node.
   With count === 1 the bezier degenerates to a straight line on its own. */
function Fan({ count, direction = 'out', delay }) {
  const stackHeight = count * NODE + (count - 1) * GAP;
  const hubY = stackHeight / 2;

  const paths = Array.from({ length: count }, (_, i) => {
    const leafY = i * (NODE + GAP) + NODE / 2;
    const [startY, endY] =
      direction === 'out' ? [hubY, leafY] : [leafY, hubY];
    return `M 0 ${startY} C ${FAN_W / 2} ${startY}, ${FAN_W / 2} ${endY}, ${FAN_W} ${endY}`;
  });

  return (
    <div
      className="step-anim-fan"
      style={{ width: FAN_W, height: stackHeight }}
    >
      <svg
        width={FAN_W}
        height={stackHeight}
        viewBox={`0 0 ${FAN_W} ${stackHeight}`}
        style={{ overflow: 'visible', display: 'block' }}
        aria-hidden="true"
      >
        {paths.map((d, i) => (
          <path key={i} d={d} className="step-anim-fan-path" fill="none" />
        ))}
      </svg>

      {paths.map((d, i) => (
        <span
          key={i}
          className="step-anim-fan-dot"
          style={{
            offsetPath: `path("${d}")`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function StepAnimation({ variant = 'linear', nodes = [] }) {
  if (!nodes.length) return null;

  if (variant === 'branch') {
    /* nodes[0] is the source; everything after it is a parallel outcome. */
    const [source, ...outcomes] = nodes;
    return (
      <div className="step-anim step-anim-branch">
        <Node name={source} delay={0} />
        <Fan count={outcomes.length} direction="out" delay={WIRE_OFFSET} />
        <div className="step-anim-stack">
          {outcomes.map((name, i) => (
            <Node key={i} name={name} delay={SPAN} />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'merge') {
    /* Everything except the last node is a source feeding into it. */
    const sources = nodes.slice(0, -1);
    const target = nodes[nodes.length - 1];
    return (
      <div className="step-anim step-anim-merge">
        <div className="step-anim-stack">
          {sources.map((name, i) => (
            <Node key={i} name={name} delay={0} />
          ))}
        </div>
        <Fan count={sources.length} direction="in" delay={WIRE_OFFSET} />
        <Node name={target} delay={SPAN} />
      </div>
    );
  }

  /* linear: a straight chain, evenly staggered across SPAN regardless of
     how many nodes there are, so every step loops in the same 3s. */
  const unit = nodes.length > 1 ? SPAN / (nodes.length - 1) : 0;

  return (
    <div className="step-anim step-anim-linear">
      {nodes.map((name, i) => (
        <Fragment key={i}>
          <Node name={name} delay={i * unit} />
          {i < nodes.length - 1 && <Wire delay={i * unit + WIRE_OFFSET} />}
        </Fragment>
      ))}
    </div>
  );
}
