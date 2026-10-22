import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import styles from "../styles/SurveyAnalysis.module.css";

/*
===========================================================
 COLORES DE LAS GRÁFICAS
===========================================================
*/

const CHART_COLORS = [
  "#78f3ff",
  "#9b7cff",
  "#ffb95e",
  "#ff70b8",
  "#64f0c1",
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const item = payload[0];

  return (
    <div className={styles.chartTooltip}>
      <strong>{item.name}</strong>

      <span>
        {item.value} respuestas
      </span>
    </div>
  );
}

function DonutChart({ datos, total }) {
  return (
    <div className={styles.donutWrapper}>
      <ResponsiveContainer
        width="100%"
        height={290}
      >
        <PieChart>
          <Pie
            data={datos}
            dataKey="valor"
            nameKey="nombre"
            cx="50%"
            cy="50%"
            innerRadius={72}
            outerRadius={105}
            paddingAngle={4}
            stroke="transparent"
          >
            {datos.map((entry, index) => (
              <Cell
                key={`${entry.nombre}-${index}`}
                fill={
                  CHART_COLORS[
                    index % CHART_COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className={styles.donutCenter}>
        <strong>{total}</strong>
        <span>respuestas</span>
      </div>
    </div>
  );
}

function HorizontalBarChart({ datos }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={Math.max(260, datos.length * 70)}
    >
      <BarChart
        data={datos}
        layout="vertical"
        margin={{
          top: 5,
          right: 25,
          bottom: 5,
          left: 15,
        }}
      >
        <CartesianGrid
          stroke="rgba(255,255,255,0.05)"
          horizontal={false}
        />

        <XAxis
          type="number"
          allowDecimals={false}
          stroke="#646c80"
          tick={{
            fill: "#969db2",
            fontSize: 11,
          }}
        />

        <YAxis
          type="category"
          dataKey="nombre"
          width={145}
          stroke="#646c80"
          tick={{
            fill: "#969db2",
            fontSize: 11,
          }}
        />

        <Tooltip content={<CustomTooltip />} />

        <Bar
          dataKey="valor"
          radius={[0, 7, 7, 0]}
          barSize={25}
        >
          {datos.map((entry, index) => (
            <Cell
              key={`${entry.nombre}-${index}`}
              fill={
                CHART_COLORS[
                  index % CHART_COLORS.length
                ]
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function SurveyChart({
  tipo,
  datos,
  total,
}) {
  return (
    <div className={styles.chartArea}>
      {tipo === "donut" ? (
        <DonutChart
          datos={datos}
          total={total}
        />
      ) : (
        <HorizontalBarChart datos={datos} />
      )}

      <div className={styles.chartLegend}>
        {datos.map((item, index) => {
          const porcentaje = Math.round(
            (item.valor / total) * 100
          );

          return (
            <div
              className={styles.legendItem}
              key={item.nombre}
            >
              <span
                className={styles.legendColor}
                style={{
                  background:
                    CHART_COLORS[
                      index %
                        CHART_COLORS.length
                    ],
                }}
              />

              <div>
                <span>{item.nombre}</span>

                <strong>
                  {item.valor} · {porcentaje}%
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SurveyChart;