import JobApplicationForm from './JobApplicationForm'

/** @deprecated Use JobApplicationForm with preselectedRole="SCIP Program" lockRole */
function SCIPApplicationForm() {
  return <JobApplicationForm preselectedRole="SCIP Program" lockRole />
}

export default SCIPApplicationForm
