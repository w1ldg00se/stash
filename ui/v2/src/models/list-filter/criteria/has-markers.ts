import { CriterionModifier } from "../../../core/generated-graphql";
import {
  Criterion,
  CriterionType,
  ICriterionOption,
} from "./criterion";

export class HasMarkersCriterion extends Criterion<string, string> {
  public type: CriterionType = "hasMarkers";
  public parameterName: string = "has_markers";
  public modifier = CriterionModifier.Equals;
  public modifierOptions = [];
  public options: string[] = [true.toString(), false.toString()];
  public value: string = "";
}

export class HasMarkersCriterionOption implements ICriterionOption {
  public label: string = Criterion.getLabel("hasMarkers");
  public value: CriterionType = "hasMarkers";
}
