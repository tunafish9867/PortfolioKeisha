import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cityGovernanceData, ordinanceThemes, totalOrdinances, totalCities, totalTopics } from './data/cityGovernanceData';
import './UrbanPolicyProject.css';

const sortedByIndex = [...cityGovernanceData].sort((a, b) => b.egovIndex - a.egovIndex);

export default function UrbanPolicyProject() {
  return (
    <article className="urban-policy">
      <div className="container">
        <span className="eyebrow">Research Project</span>
        <h1>City-to-City Learning Through Urban Policy Analysis</h1>

        <div className="project-tags">
          {['Python', 'R', 'Structural Topic Modeling', 'Word2Vec', 'Shiny'].map((tech) => (
            <span className="tag" key={tech}>{tech}</span>
          ))}
        </div>

        <p className="up-description">
          A text-mining pipeline that analyzes municipal ordinances from 22 highly urbanized
          Philippine cities to build an E-Governance Index, link it to competitiveness (CMCI)
          scores, and surface the legislative themes cities prioritize most.
        </p>

        <a
          href="https://city-ordinances.shinyapps.io/city-ordinances/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open live interactive dashboard
        </a>

        <div className="up-stats">
          <div className="up-stat">
            <span className="up-stat-value">{totalOrdinances.toLocaleString()}</span>
            <span className="up-stat-label">Ordinances analyzed</span>
          </div>
          <div className="up-stat">
            <span className="up-stat-value">{totalCities}</span>
            <span className="up-stat-label">Cities compared</span>
          </div>
          <div className="up-stat">
            <span className="up-stat-value">{totalTopics}</span>
            <span className="up-stat-label">Topics modeled (STM)</span>
          </div>
        </div>

        <section className="up-chart-block">
          <h2>E-Governance Index vs. CMCI competitiveness score</h2>
          <p className="up-chart-caption">By city, ranked by E-Governance Index</p>
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={sortedByIndex} margin={{ top: 10, right: 10, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="city" angle={-40} textAnchor="end" interval={0} tick={{ fill: '#ffffffaa', fontSize: 12 }} />
              <YAxis yAxisId="left" tick={{ fill: '#ffffffaa', fontSize: 12 }} label={{ value: 'E-Gov Index', angle: -90, position: 'insideLeft', fill: '#ffffffaa' }} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#ffffffaa', fontSize: 12 }} label={{ value: 'CMCI Score', angle: 90, position: 'insideRight', fill: '#ffffffaa' }} />
              <Tooltip contentStyle={{ background: '#201446', border: '1px solid rgba(255,255,255,0.3)' }} labelStyle={{ color: '#fff' }} />
              <Legend wrapperStyle={{ color: '#ffffffaa' }} />
              <Bar yAxisId="left" dataKey="egovIndex" name="E-Governance Index" fill="#5dcaa5" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="cmciScore" name="CMCI Score" fill="#7f77dd" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="up-chart-block">
          <h2>Most common ordinance themes</h2>
          <p className="up-chart-caption">Top 10 of 95 topics identified by the structural topic model</p>
          <ResponsiveContainer width="100%" height={420}>
            <BarChart data={ordinanceThemes} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis type="number" tick={{ fill: '#ffffffaa', fontSize: 12 }} allowDecimals={false} />
              <YAxis type="category" dataKey="theme" width={220} tick={{ fill: '#ffffffcc', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: '#201446', border: '1px solid rgba(255,255,255,0.3)' }} labelStyle={{ color: '#fff' }} />
              <Bar dataKey="count" name="Ordinance count" fill="#5dcaa5" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <details className="up-methodology">
          <summary>How this was built (methodology)</summary>
          <ol>
            <li>
              <strong>Text mining &amp; E-Governance Index.</strong> Preprocessed ordinance text,
              computed TF-IDF scores, and classified ordinances into e-governance categories using
              Word2Vec similarity, with an objective similarity threshold to improve reliability.
            </li>
            <li>
              <strong>Structural Topic Modeling (STM).</strong> Applied STM in R to uncover 95
              ordinance themes, then related topic prevalence to CMCI scores, the E-Governance
              Index, and city of origin.
            </li>
            <li>
              <strong>Interactive visualization.</strong> Shipped an interactive Shiny dashboard
              for exploring ordinance topics, similarity classifications, and city competitiveness
              indicators side by side.
            </li>
          </ol>
        </details>
      </div>
    </article>
  );
}
